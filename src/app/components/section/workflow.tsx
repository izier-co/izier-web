import CustomLink from '../customLink'
import { Text, Highlight } from '../text'

const Workflow = () => {
  return (
    <div className="flex flex-col gap-6">
      <CustomLink href="#methodology">
        <h2 id="methodology" className="underline">
          Workflow - From Idea to Impact
        </h2>
      </CustomLink>
      <div>
        <Text>
          Our <Highlight>7-step process</Highlight> ensures every project is a success:
        </Text>
        <ol className="list-inside list-decimal">
          <Text>
            <li>
              <Highlight>Discovery:</Highlight> Understand user needs, define goals.
            </li>
          </Text>
          <Text>
            <li>
              <Highlight>Planning:</Highlight> Build technical scope & timeline.
            </li>
          </Text>
          <Text>
            <li>
              <Highlight>Design:</Highlight> Create UI/UX wireframes & prototypes.
            </li>
          </Text>
          <Text>
            <li>
              <Highlight>Development:</Highlight> Code architecture & integrations.
            </li>
          </Text>
          <Text>
            <li>
              <Highlight>QA & Testing:</Highlight> Performance & security assurance.
            </li>
          </Text>
          <Text>
            <li>
              <Highlight>Deployment:</Highlight> Go live & monitor performance.
            </li>
          </Text>
          <Text>
            <li>
              <Highlight>Maintenance:</Highlight> Iterate, update, support.
            </li>
          </Text>
        </ol>
      </div>
    </div>
  )
}

export default Workflow
