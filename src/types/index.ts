export type UserProps = {
  first_name: string
  last_name: string
  age: number
  username: string
  email: string
  password: string
}

export type AppointmentProps = {
  doctor: string
  description: string
  capacity: number
  registrant: UserProps[]
}
