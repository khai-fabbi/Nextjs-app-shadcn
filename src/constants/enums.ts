export enum HttpCode {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Status {
  NotActive,
  Active,
}

export enum Gender {
  Female = 1,
  Male = 2,
}

export enum EUserStatus {
  ACTIVE = 'ACTIVE',
  UNACTIVE = 'UNACTIVE',
  BANNED = 'BANNED',
}
export enum EUserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  EXPERT = 'EXPERT',
}

export enum ECourseStatus {
  APPROVED = 'APPROVED',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
}
export enum ECourseLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}
export enum ELessonType {
  VIDEO = 'VIDEO',
  TEXT = 'TEXT',
}
