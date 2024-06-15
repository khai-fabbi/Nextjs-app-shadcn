import { CourseItem } from '@/components/course'
import { Heading } from '@/components/typography'
import { Button } from '@/components/ui/button'

type Props = {}

const Page = (props: Props) => {
  return (
    <section>
      <Heading>Trang chủ</Heading>
      <div className='grid grid-cols-4 gap-8'>
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </section>
  )
}

export default Page
