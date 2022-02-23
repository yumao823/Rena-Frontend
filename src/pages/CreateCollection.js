import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import WebsiteIcon from 'react-bootstrap-icons/dist/icons/globe'
import DiscordIcon from 'react-bootstrap-icons/dist/icons/discord'
import TwitterIcon from 'react-bootstrap-icons/dist/icons/twitter'
import InstagramIcon from 'react-bootstrap-icons/dist/icons/instagram'
import MediumIcon from 'react-bootstrap-icons/dist/icons/medium'
import TelegramIcon from 'react-bootstrap-icons/dist/icons/telegram'

import Warning from 'components/Warning'
import CollectionIcon from 'assets/images/nft-black.svg'
import { CATEGORIES } from 'constants/category'

function CreateCollection() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')
  const [royalty, setRoyalty] = useState(0)
  const [feeRecipient, setFeeRecipient] = useState('')
  const [category, setCategory] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [discordUrl, setDiscordUrl] = useState('')
  const [twitterUrl, setTwitterUrl] = useState('')
  const [instagramUrl, setInstagramUrl] = useState('')
  const [mediumUrl, setMediumUrl] = useState('')
  const [telegramUrl, setTelegramUrl] = useState('')
  const [contactEmail, setContactEmail] = useState('')

  const handleCreate = () => {
    const payload = {
      collection: {
        name,
        imageURL,
        description,
        royalty,
        feeRecipient,
        category,
        websiteUrl,
        discordUrl,
        twitterUrl,
        instagramUrl,
        mediumUrl,
        telegramUrl,
        contactEmail
      }
    }
    dispatch({ type: 'POSTCOLLECTION_REQUEST', payload })
  }

  const disabled = useMemo(() => {
    if (!name || !feeRecipient || !contactEmail) return true
    return false
  }, [name, feeRecipient, contactEmail])

  return (
    <div className="create-collection">
      <h2 className="fw-bold">Create Collection</h2>
      <p>
        Please submit using the owner address of the collection. If you cannot
        use the owner address, please email us on contact@fantom.foundation with
        the information below (and proof of collection ownership, such as from
        the collection's official email address).
      </p>

      <h5 className="fw-bold">Logo Image *</h5>
      <div className="mb-3 item-upload">
        <input type="file" name="profile" id="profile" hidden />
        <label for="profile" />
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
        <Form.Label>
          Royalty*
          <Warning
            label=""
            description="We will use this email to notify you about your collection application."
          />
        </Form.Label>
        <Form.Control
          type="number"
          min={10}
          max={10}
          onChange={(e) => setRoyalty(Number(e.target.value))}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          Fee Recipient*
          <Warning
            label=""
            description="We will use this email to notify you about your collection application."
          />
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Fee Recipient"
          onChange={(e) => setFeeRecipient(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <br></br>
        <Form.Text>
          Adding a category will help make your item discoverable on OpenSea.
        </Form.Text>
        <div className="d-flex mt-2">
          <Dropdown className="me-3 category-select">
            <Dropdown.Toggle variant="dark" disabled={!!category}>
              Add Category
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              {CATEGORIES.map((item, index) => (
                <Dropdown.Item
                  key={`ca-${index}`}
                  onClick={() => setCategory(item)}
                >
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          {category && (
            <Button className="category" variant="dark">
              <span className="me-2">{category.label}</span>
              <CloseButton variant="white" onClick={() => setCategory(null)} />
            </Button>
          )}
        </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Links *</Form.Label>
        <div className="links">
          <InputGroup>
            <InputGroup.Text>
              <WebsiteIcon size={24} />
            </InputGroup.Text>
            <FormControl
              placeholder="Enter your website url"
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>
              <DiscordIcon size={24} />
            </InputGroup.Text>
            <FormControl
              placeholder="Enter your Discord url"
              onChange={(e) => setDiscordUrl(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>
              <TwitterIcon size={24} />
            </InputGroup.Text>
            <FormControl
              placeholder="Enter your Twitter profile link"
              onChange={(e) => setTwitterUrl(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>
              <InstagramIcon size={24} />
            </InputGroup.Text>
            <FormControl
              placeholder="Enter your Instagram profile link"
              onChange={(e) => setInstagramUrl(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>
              <MediumIcon size={24} />
            </InputGroup.Text>
            <FormControl
              placeholder="Enter your Medium profile link"
              onChange={(e) => setMediumUrl(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text className="border-0 border-bottom-left">
              <TelegramIcon size={24} />
            </InputGroup.Text>
            <FormControl
              className="border-bottom-0 border-bottom-right"
              placeholder="Enter your Telegram link"
              onChange={(e) => setTelegramUrl(e.target.value)}
            />
          </InputGroup>
        </div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          Contact Email*
          <Warning
            label=""
            description="We will use this email to notify you about your collection application."
          />
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Email Address"
          onChange={(e) => setContactEmail(e.target.value)}
        />
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button
          className="border px-4"
          disabled={disabled}
          onClick={handleCreate}
        >
          Create
        </Button>
      </div>
    </div>
  )
}

export default CreateCollection
