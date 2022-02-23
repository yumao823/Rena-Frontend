import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import PlusIcon from 'react-bootstrap-icons/dist/icons/plus'
import ListIcon from 'react-bootstrap-icons/dist/icons/list-ul'
import StarIcon from 'react-bootstrap-icons/dist/icons/star-fill'
import ChartIcon from 'react-bootstrap-icons/dist/icons/bar-chart-fill'
import UnlockIcon from 'react-bootstrap-icons/dist/icons/unlock'
import ExclamationIcon from 'react-bootstrap-icons/dist/icons/exclamation-triangle-fill'
import Select from 'react-select'
import Toggle from 'react-toggle'
import Warning from 'components/Warning'
import { BLOCKCHAINES } from 'constants/blockchain'

function CreateItem() {
  const dispatch = useDispatch()

  const status = useSelector((state) => state.pinata.status)
  const beneficiary = useSelector((state) => state.app.account)
  const data =
    useSelector((state) => state.collections.collections.collections) ?? []
  const collections = useMemo(() => {
    return data.map((item) => ({
      value: item.contractAddress,
      label: item.name
    }))
  }, [data])

  const [file, setFile] = useState(null)
  const [thumbnail, setThumbnail] = useState(null)
  const [contentType, setContentType] = useState('image')
  const [paymentToken, setPaymentToken] = useState('ftm')
  const [tokenType, setTokenType] = useState(721)
  const [tokenID, setTokenID] = useState(1)
  const [price, setPrice] = useState(0)
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [externalLink, setExternalLink] = useState('')
  const [description, setDescription] = useState('')
  const [collection, setCollection] = useState(collections[0])
  const [properties, setProperties] = useState({})
  const [levels, setLevels] = useState({})
  const [stats, setStats] = useState({})
  const [unlockable, setUnlockable] = useState(false)
  const [supply, setSupply] = useState(0)

  const disabled = useMemo(() => {
    return (
      !beneficiary || !name || !description || status == 'pending'
    )
  }, [name, description, status, beneficiary])

  const handleCreate = () => {
    const json = {
      pinataMetadata: { name, keyvalues: { collection: collection.value } },
      pinataContent: { name, description, contractAddress: collection.value }
    }
    const data = {
      beneficiary,
      // contractAddress: collection.value,
      contractAddress: '0xea2aB5F5da50ecfb9b0424a35BfaeF0d952a0Ae5',
      name,
      description
    }
    dispatch({ type: 'PINATA_REQUEST', payload: { file, json, data } })
  }

  const handleFile = (e) => {
    if (e.target.files.length === 0) return
    let payload = new FormData()
    payload.append('file', e.target.files[0])
    const metadata = JSON.stringify({
      name: e.target.files[0].name,
      keyvalues: { color: 'green' }
    })
    payload.append('pinataMetadata', metadata)
    setFile(payload)
    setThumbnail(URL.createObjectURL(e.target.files[0]))
  }

  useEffect(() => {
    dispatch({ type: 'GETCOLLECTIONS_REQUEST' })
  }, [])

  return (
    <div className="create-item">
      <h2 className="fw-bold">Create new item</h2>
      <h5 className="fw-bold">Image, Video, Audio, or 3D Model *</h5>
      <p>
        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB,
        GLTF. Max size: 100 MB
      </p>
      <div className="mb-3 item-upload">
        <input
          type="file"
          name="profile"
          id="profile"
          hidden
          onChange={handleFile}
        />
        <label for="profile" style={{ backgroundImage: `url(${thumbnail})` }} />
      </div>
      <Form.Group className="mb-3">
        <Form.Label>Name *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Item Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>External Link *</Form.Label>
        <br />
        <Form.Text>
          OpenSea will include a link to this URL on this item's detail page, so
          that users can click to learn more about it. You are welcome to link
          to your own webpage with more details.
        </Form.Text>
        <Form.Control
          type="text"
          placeholder="https://yoursite.io/item/123"
          onChange={(e) => setExternalLink(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Provide a detailed description of your item"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Text>
          The description will be included on the item's detail page underneath
          its image. Markdown syntax is supported.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Collection</Form.Label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={collections[0]}
          isSearchable
          name="color"
          options={collections}
          theme={(theme) => ({
            ...theme,
            colors: { ...theme.colors, primary25: '#93c1f1' }
          })}
          onChange={(e) => setCollection(e)}
        />
        <Form.Text>
          This is the collection where your item will appear.
          <Warning
            label=""
            description="Moving items to a different collection may take up to 30 minutes. You can manage your collections here."
          />
        </Form.Text>
      </Form.Group>

      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <ListIcon className="mt-1" color="#ccc" size="20" />
          <div className="ms-2">
            <p>Properties</p>
            <p>Textual traits that show up as rectangles</p>
          </div>
        </div>
        <Button className="border">
          <PlusIcon color="#ccc" />
        </Button>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <StarIcon className="mt-1" color="#ccc" size="18" />
          <div className="ms-2">
            <p>Levels</p>
            <p>Numerical traits that show as a progress bar</p>
          </div>
        </div>
        <Button className="border">
          <PlusIcon color="#ccc" />
        </Button>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <ChartIcon className="mt-1" color="#ccc" size="18" />
          <div className="ms-2">
            <p>Stats</p>
            <p>Numerical traits that just show as numbers</p>
          </div>
        </div>
        <Button className="border">
          <PlusIcon color="#ccc" />
        </Button>
      </div>

      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <UnlockIcon className="mt-1" color="#ccc" size="18" />
          <div className="ms-2">
            <p>Unlockable Content</p>
            <p>
              Include unlockable content that can only be revealed by the owner
              of the item
            </p>
          </div>
        </div>
        <Toggle
          icons={false}
          onChange={(e) => setUnlockable(e.target.checked)}
        />
      </div>

      <Form.Group className="mb-3">
        <Form.Label>Supply</Form.Label>
        <Form.Control
          type="text"
          placeholder="Supply"
          onChange={(e) => setSupply(e.target.value)}
        />
        <Form.Text>
          The number of copies that can be minted. No gas cost to you!
          Quantities above one coming soon.
        </Form.Text>
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button
          className="create border px-4"
          disabled={disabled}
          onClick={handleCreate}
        >
          {status == 'pending' ? (
            <Spinner animation="border" size="sm" />
          ) : (
            'Create'
          )}
        </Button>
      </div>
    </div>
  )
}

export default CreateItem
