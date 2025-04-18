import './globals.css'
import Title from '@/components/heroTitle'
import ValueProposition from '@/components/valueProp'
import { Service, ServiceList, ServiceText } from '@/components/services'
import CustomLink from '@/components/customLink'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const findResult = await payload.find({ collection: 'services' })

  return (
    <div className="flex flex-col gap-6">
      <Title text="Smarter, Scalable, Secure Software Built for Business Success" />
      <ValueProposition>
        Driven by a vision to empower growth, we enable enterprises to overcome traditional barriers
        through agile digital integration. At Izier, we deliver flexible, scalable, and secure
        software designed to solve business problems and optimize performance. Our advanced
        solutions streamline operations, boost efficiency, and drive innovation, helping businesses
        thrive in dynamic markets and maintain a competitive edge.
      </ValueProposition>
      <Service className="flex flex-col gap-6">
        <ServiceText>
          <CustomLink href="#" target="_self">
            Izier&apos;s
          </CustomLink>
          &nbsp;agile, enterprise-grade solutions are built to scale — delivering secure software
          that solves real business problems. Whether you&apos;re scaling up or optimizing, our
          solutions are built to grow with your business, turning technology into a strategic
          advantage.
        </ServiceText>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-24 gap-y-4 w-fit">
          {findResult.docs
            .slice()
            .reverse()
            .map((page) => (
              <ServiceList key={page.createdAt} href={page.slug || '#'}>
                {page['service-name']}
              </ServiceList>
            ))}
        </div>
      </Service>
    </div>
  )
}
