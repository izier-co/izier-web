import { Text, Highlight } from '@/components/text'
import CustomLink from '../customLink'

const Methodology = () => {
  return (
    <div className="flex flex-col gap-6">
      <CustomLink href="#methodology">
        <h2 id="methodology" className="underline">
          Methodology - Agile. Secure. Scalable.
        </h2>
      </CustomLink>
      <div>
        <Text>
          At Izier, we merge <Highlight>agile workflows</Highlight> with{' '}
          <Highlight>advanced tech stacks</Highlight> to deliver high-performance solutions:
        </Text>
        <ol className="list-inside list-decimal">
          <Text>
            <li>
              <Highlight>Agile-Driven:</Highlight> Iterative, fast, and aligned with shifting
              business needs.
            </li>
          </Text>
          <Text>
            <li>
              <Highlight>Security-First:</Highlight> End-to-end protection with enterprise-grade
              protocols.
            </li>
          </Text>
          <Text>
            <li>
              <Highlight>Continuous Optimization:</Highlight> Data-led insights and risk mitigation
              for peak ROI.
            </li>
          </Text>
        </ol>
        <Text>
          This synergy powers resilient, scalable digital transformation, built for what&apos;s
          next.
        </Text>
      </div>
    </div>
  )
}

export default Methodology
