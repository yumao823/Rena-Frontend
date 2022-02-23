import ArrowRight from 'react-bootstrap-icons/dist/icons/arrow-right'

export default function Collapsed({ onToggle }) {
  return (
    <div className="d-flex justify-content-center py-3" onClick={onToggle}>
      <ArrowRight className="cursor-pointer" color="#ccc" />
    </div>
  )
}
