'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { object, z } from 'zod'

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
import { updateCourse } from '@/lib/actions/course.actions'
import toast from 'react-hot-toast'
import { Loading } from '../common'
import { useRouter } from 'next/navigation'
import { ECourseLevel, ECourseStatus } from '@/constants/enums'
import { Textarea } from '../ui/textarea'
import { ICourse } from '@/database/course.model'
import { TUpdateCourse } from '@/types'

const FormSchema = z.object({
  title: z.string().min(10, {
    message: 'Tên khóa học ít nhất 10 kí tự',
  }),
  slug: z.string().optional(),
  image: z.string().optional(),
  intro_url: z.string().optional(),
  price: z.coerce.number().positive('Giá phải lớn hơn 0').optional(),
  sale_price: z.coerce.number().positive('Giá phải lớn hơn 0').optional(),
  desc: z.string().optional(),
  views: z.coerce.number().int().positive('Lượt xem phải lớn hơn 0').optional(),
  status: z
    .enum([
      ECourseStatus.PENDING,
      ECourseStatus.APPROVED,
      ECourseStatus.REJECTED,
    ])
    .optional(),
  level: z
    .enum([
      ECourseLevel.BEGINNER,
      ECourseLevel.INTERMEDIATE,
      ECourseLevel.ADVANCED,
    ])
    .optional(),
  info: z
    .object({
      requirements: z.array(z.string()).optional(),
      benefits: z.array(z.string()).optional(),
      qa: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .optional(),
    })
    .optional(),
})

interface CourseUpdateFormProps {
  courseInfo: ICourse
}
export default function CourseUpdateForm({
  courseInfo,
}: CourseUpdateFormProps) {
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: courseInfo.title,
      slug: courseInfo.slug,
      price: courseInfo.price,
      sale_price: courseInfo.sale_price,
      desc: courseInfo.desc,
      views: courseInfo.views,
      intro_url: courseInfo.intro_url,
    },
  })

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    try {
      const newCourse = await updateCourse({
        slug: courseInfo.slug,
        //@ts-ignore
        info: formData,
      })
      toast.success('Update thành công.')
      router.replace(`/manage/course/update?slug=${newCourse.slug}`)
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Giá gốc</FormLabel>
                <FormControl>
                  <Input placeholder='990.000' type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='sale_price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Giá khuyến mại</FormLabel>
                <FormControl>
                  <Input placeholder='790.000' type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='desc'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mô tả khóa học</FormLabel>
                <FormControl>
                  <Textarea placeholder='Mô tả' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='image'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hình ảnh</FormLabel>
                <FormControl>
                  <Input id='picture' type='file' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='intro_url'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Youtube URL</FormLabel>
                <FormControl>
                  <Input placeholder='https://youtube.com/1231231' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='views'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lượt xem</FormLabel>
                <FormControl>
                  <Input placeholder='1000' type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='status'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trạng thái</FormLabel>
                <FormControl></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='level'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trình độ</FormLabel>
                <FormControl></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='info.requirements'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Yêu cầu</FormLabel>
                <FormControl></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='info.benefits'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lợi ích</FormLabel>
                <FormControl></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='info.qa'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question/Answer</FormLabel>
                <FormControl></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type='submit' className='mt-5' size={'lg'}>
          Cập nhật khóa học
        </Button>
      </form>
    </Form>
  )
}
