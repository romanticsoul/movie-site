import { Api, HttpResponse } from "./fetch-generated-client"

/**
 * Обёртка над API для перехвата ошибок
 * и автоматической смены ключа при 403 статусе
 */

export class ApiKeyRotator {
  private apiKeys: string[]
  private disabledKeys: Set<number> = new Set()
  private currentKeyIndex: number = 0
  private lastResetDate: string = this.getCurrentUTCDate()
  private client: Api<unknown>

  constructor(apiKeys: string[]) {
    this.apiKeys = apiKeys
    this.client = new Api({
      baseApiParams: { headers: {} },
    })
    this.wrapRequestMethod()
  }

  private getCurrentUTCDate(): string {
    return new Date().toISOString().split("T")[0] // "YYYY-MM-DD"
  }

  private resetIfNewDay(): void {
    const today = this.getCurrentUTCDate()
    if (today !== this.lastResetDate) {
      this.lastResetDate = today
      this.disabledKeys.clear()
    }
  }

  private rotateApiKey(): boolean {
    this.resetIfNewDay()
    const totalKeys = this.apiKeys.length

    for (let i = 1; i <= totalKeys; i++) {
      const nextIndex = (this.currentKeyIndex + i) % totalKeys
      if (!this.disabledKeys.has(nextIndex)) {
        this.currentKeyIndex = nextIndex
        return true
      }
    }
    return false // Все ключи исчерпаны
  }

  private wrapRequestMethod(): void {
    const originalRequest = this.client.request.bind(this.client)

    this.client.request = async <T, E>(
      params: Parameters<typeof this.client.request>[0],
    ): Promise<HttpResponse<T, E>> => {
      this.resetIfNewDay()
      const key = this.apiKeys[this.currentKeyIndex]
      const headers = { ...params.headers, "X-API-KEY": key }

      try {
        return await originalRequest({ ...params, headers })
      } catch (error) {
        if (error instanceof Response && error.status === 403) {
          this.disabledKeys.add(this.currentKeyIndex)
          if (!this.rotateApiKey()) {
            throw new Error("Все API-ключи исчерпаны на сегодня (403).")
          }
          return this.client.request(params) // Повторяем запрос с новым ключом
        }

        if (error instanceof Response) {
          console.error(`API упал. Ошибка Response: ${error.status} ${error.statusText}`)

          return {
            data: undefined,
            error: error as E,
            response: error,
            status: error.status,
            statusText: error.statusText,
            ok: false,
          } as unknown as HttpResponse<T, E>
        }

        if (error instanceof Error) {
          console.error(`API упал. Ошибка: ${error.message}`)
        } else {
          console.error(`API упал. Неизвестная ошибка:`, error)
        }

        throw error
      }
    }
  }

  public getClient(): Api<unknown> {
    return this.client
  }
}

// import { Api } from "./axios-generated-client"
// import axiosRetry from "axios-retry"
// import { AxiosError } from "axios"

// export class ApiKeyRotator {
//   private apiKeys: string[]
//   private disabledKeys: Set<number> = new Set()
//   private currentKeyIndex: number = 0
//   private client: Api<unknown>
//   private lastResetDate: string = this.getCurrentUTCDate()

//   constructor(apiKeys: string[]) {
//     this.apiKeys = apiKeys
//     this.client = this.createClient()
//   }

//   private getCurrentUTCDate(): string {
//     return new Date().toISOString().split("T")[0] // "YYYY-MM-DD"
//   }

//   private resetIfNewDay() {
//     const today = this.getCurrentUTCDate()
//     if (today !== this.lastResetDate) {
//       this.lastResetDate = today
//       this.disabledKeys.clear()
//     }
//   }

//   private rotateApiKey(): boolean {
//     this.resetIfNewDay()

//     const totalKeys = this.apiKeys.length
//     for (let i = 1; i <= totalKeys; i++) {
//       const nextIndex = (this.currentKeyIndex + i) % totalKeys
//       if (!this.disabledKeys.has(nextIndex)) {
//         this.currentKeyIndex = nextIndex
//         return true
//       }
//     }

//     return false // Все ключи заблокированы
//   }

//   private createClient(): Api<unknown> {
//     const client = new Api<unknown>({
//       baseURL: "https://api.kinopoisk.dev",
//       adapter: "fetch",
//     })

//     client.instance.interceptors.request.use((config) => {
//       this.resetIfNewDay()
//       config.headers = config.headers || {}
//       config.headers["X-API-KEY"] = this.apiKeys[this.currentKeyIndex]
//       return config
//     })

//     axiosRetry(client.instance, {
//       retries: this.apiKeys.length - 1, // Точно не больше, чем количество ключей
//       retryCondition: (error: AxiosError) => error.response?.status === 403,
//       onRetry: () => {
//         this.disabledKeys.add(this.currentKeyIndex)
//         const success = this.rotateApiKey()

//         if (!success) {
//           throw new Error("Все API-ключи исчерпаны на сегодня (403).")
//         }
//       },
//     })

//     return client
//   }

//   public getClient(): Api<unknown> {
//     return this.client
//   }
// }
