import Title from '@/components/heroTitle'
import ValueProposition from '@/components/valueProp'
import './globals.css'

export default async function HomePage() {
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
    </div>
  )
}
