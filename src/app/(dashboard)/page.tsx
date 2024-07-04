import { CourseItem } from '@/components/course'
import { Heading } from '@/components/typography'
import { getCourseList } from '@/lib/actions/course.actions'

type Props = {}

const Page = async (props: Props) => {
  const courseList = await getCourseList()
  console.log(courseList)

  return (
    <section>
      <Heading>Trang chủ</Heading>
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {courseList?.map((item, idx) => (
          <CourseItem key={idx} data={item} />
        ))}
      </div>
    </section>
  )
}

export default Page
