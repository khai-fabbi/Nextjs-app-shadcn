'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { createCourse } from '@/lib/actions/course.actions'
import toast from 'react-hot-toast'
import slugify from 'slugify'
import { Loading } from '../common'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
  title: z.string().min(10, {
    message: 'Tên khóa học ít nhất 10 kí tự',
  }),
  slug: z.string(),
  author: z.string().optional(),
})

interface CourseAddFormProps {
  userId: string
}
export default function CourseAddForm({ userId }: CourseAddFormProps) {
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      slug: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = {
      ...data,
      slug:
        data.slug ||
        slugify(data.title, {
          lower: true,
          strict: true,
          locale: 'vi',
          trim: true,
        }),
      author: userId,
    }
    try {
      const newCourse = await createCourse(formData)

      if (newCourse.message === 'OK') {
        toast.success('Đã tạo mới khóa học.')
        router.push(`/manage/course/update?slug=${newCourse.data.slug}`)
      } else {
        toast.error(newCourse.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('Có lỗi xảy ra. Vui lòng thử lại!')
    } finally {
      // form.reset()
    }
  }

  return (
    <Form {...form}>
      {form.formState.isSubmitting && <Loading />}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-8'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên khóa học *</FormLabel>
                <FormControl>
                  <Input placeholder='Tên khóa học' {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='slug'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Đường dẫn khóa học</FormLabel>
                <FormControl>
                  <Input placeholder='Đường dẫn' {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type='submit' className='mt-4'>
          Submit
        </Button>
      </form>
    </Form>
  )
}
