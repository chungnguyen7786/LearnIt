import { Card, Row, Col, Button } from 'react-bootstrap'
// import Badge from 'react-bootstrap/Badge'
import ActionButtons from './ActionButtons'

const SinglePost = ({ post: { _id, status, title, description, url } }) => (
  <Card
    className='shadow'
    border={
      status === 'LEARNED'
        ? 'success'
        : status === 'LEARNING'
        ? 'warning'
        : 'danger'
    }
  >
    <Card.Body>
      <Card.Title>
        <Row>
          <Col>
            <p className='post-title'>{title}</p>
            <Button
              variant={
                status === 'LEARNED'
                  ? 'success'
                  : status === 'LEARNING'
                  ? 'warning'
                  : 'danger'
              }
            >
              {status}
            </Button>
          </Col>
          <Col className='text-right'>
            <ActionButtons url={url} _id={_id} />
          </Col>
        </Row>
      </Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
)

export default SinglePost
