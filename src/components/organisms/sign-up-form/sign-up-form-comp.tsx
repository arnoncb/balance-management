import { TextInput } from '@/components/atoms/text-input/input-comp'
import { useContext } from 'react'
import { Button } from '@/components/atoms/button/button-comp'
import { Form } from '@/components/atoms/form/form-comp'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthContext } from '@/contexts/auth-context'

const handleSignUpFormSchema = z
  .object({
    name: z
      .string()
      .nonempty('Name required')
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => {
            return word[0].toUpperCase().concat(word.substring(1))
          })
      }),
    email: z.string().nonempty('Email required').email(),
    password: z
      .string()
      .nonempty('Password required')
      .min(8, 'Your password must have at least 8 characters'),
    confirmPassword: z.string().nonempty('Confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const SignUp = () => {
  const { signUp } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(handleSignUpFormSchema),
  })

  async function handleSignUp(data: any) {
    console.log(data)
    await signUp(data)
  }

  return (
    <Form onSubmit={handleSubmit(handleSignUp)}>
      <>
        <TextInput
          type="text"
          name="name"
          error={errors.fullName}
          register={register}
          placeholder="Full name"
        />
        <TextInput
          type="email"
          name="email"
          register={register}
          placeholder="Email"
          error={errors.email}
        />
        <TextInput
          type="password"
          name="password"
          register={register}
          placeholder="Password"
          error={errors.password}
        />
        <TextInput
          type="password"
          name="confirmPassword"
          register={register}
          placeholder="Confirm password"
          error={errors.confirmPassword}
        />
      </>
      <Button type="submit">Get started</Button>
    </Form>
  )
}
