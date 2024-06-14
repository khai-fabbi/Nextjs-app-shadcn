import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import dayjs from 'dayjs'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key)
  }
  return null
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key)
  }
  return null
}

export function isEmpty(obj: Array<any> | object): boolean {
  if (!obj || typeof obj !== 'object') return !obj

  if (Array.isArray(obj)) {
    return !obj.length
  }

  return !Object.keys(obj).length
}

export function removeUndefinedAndNull(obj: Object) {
  const result: Record<string, any> = {}

  for (const key in obj) {
    if (
      obj[key as keyof Object] !== undefined &&
      obj[key as keyof Object] !== null
    ) {
      result[key as any] = obj[key as keyof Object]
    }
  }

  return result
}

export function handleApiError(error: Error): void {
  try {
    let errorData
    try {
      errorData = JSON.parse(error.message)
    } catch (parseError) {
      return
    }

    if (
      typeof errorData === 'object' &&
      errorData !== null &&
      'fieldErrors' in errorData
    ) {
      const fieldErrors = errorData.fieldErrors as Record<string, string[]>
      Object.keys(fieldErrors).forEach((fieldName) => {
        const validationMessages = fieldErrors[fieldName]
        if (validationMessages.length > 0) {
          const firstValidationMessage = validationMessages[0]
          // console.log(
          //   `Validation error for ${fieldName}:`,
          //   firstValidationMessage
          // );
        }
      })
    }
  } catch (error: any) {
    // console.log("Original error message:", error);
  }
}

export function formatDate(date: Date | string | number) {
  return dayjs(date).format('MMMM D, YYYY')
}

export function isMacOs() {
  if (typeof window === 'undefined') return false

  return window.navigator.userAgent.includes('Mac')
}
export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function isArrayOfFile(files: unknown): files is File[] {
  const isArray = Array.isArray(files)
  if (!isArray) return false
  return files.every((file) => file instanceof File)
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
