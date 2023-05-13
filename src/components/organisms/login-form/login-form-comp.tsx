import { TextInput } from '@/components/atoms/text-input/input-comp'
import { useContext } from 'react'
import { Button } from '@/components/atoms/button/button-comp'
import { Form } from '@/components/atoms/form/form-comp'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthContext } from '@/contexts/auth-context'

const handleSignInFormSchema = z.object({
  email: z.string().nonempty('Email required').email(),
  password: z
    .string()
    .nonempty('Password required')
    .min(8, 'Your password must have at least 8 characters'),
})

export const LogIn = () => {
  const { signIn } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(handleSignInFormSchema),
  })

  async function handleSignIn(data: any) {
    await signIn(data)
  }

  return (
    <Form onSubmit={handleSubmit(handleSignIn)}>
      <>
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
      </>
      <Button type="submit">Continue</Button>
    </Form>
  )
}
