import { makeAutoObservable } from "mobx";
import { redirect } from "next/navigation";
import $auth from "@/http/auth";
import ISignUpData from "@/types/ISignUpData";

export default class AuthStore {
  
  signUpData: ISignUpData = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    repeatPassword: ''
  }

  step: boolean = false
  submit: boolean = false
  
  constructor() {
    makeAutoObservable(this)
  }

  setSignUpData(data: Partial<ISignUpData>) {
    this.signUpData = {
      ...this.signUpData,
      ...data
    }
  }

  setStep(value: boolean) {
    this.step = value
  }

  setSubmit(value: boolean) {
    this.submit = value
  }

  backStep() {
    this.setStep(false)
  }

  nextStep() {
    this.setStep(true)
  }

  async signUp() {
    try {
      // !=== DELETE REPEATPASSWORD KEY AT THE POST ===!
      const { repeatPassword, ...responseData } = this.signUpData
      const response = await $auth.post('/users/sign_up', responseData)

      if (response.status = 200) {
        return redirect('/home')
      } else {
        return undefined
      }
    } catch (error) {
      
    }
  }
  
}