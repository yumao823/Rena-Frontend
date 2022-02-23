import Accordion from 'react-bootstrap/Accordion'
import Select from 'react-select'
import Activity from 'react-bootstrap-icons/dist/icons/activity'

const DATES = [
  { value: 0, label: 'Last 7 Days' },
  { value: 1, label: 'Last 14 Days' },
  { value: 2, label: 'Last 30 Days' },
  { value: 3, label: 'Last 60 Days' },
  { value: 4, label: 'Last 90 Days' },
  { value: 5, label: 'Last Year' },
  { value: 6, label: 'All Time' }
]

function Price() {
  return (
    <div className="price">
      <Accordion className="mt-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Activity className="me-2" />
            <span>Price History</span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="price-item">
              <Select
                className="basic-single w-40"
                classNamePrefix="select"
                defaultValue={DATES[6]}
                isSearchable
                name="color"
                options={DATES}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: '#93c1f1'
                  }
                })}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Price
