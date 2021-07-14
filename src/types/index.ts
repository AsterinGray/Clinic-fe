export type UserProps = {
  _id: string
  first_name: string
  last_name: string
  age: number
  username: string
  email: string
  password: string
}

export type AppointmentProps = {
  _id: string
  doctor: string
  description: string
  capacity: number
  registrant: UserProps[]
}
