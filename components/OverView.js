
import {
    Card,
    Col,
    Row,
  } from 'antd';
  
  import PostCard from './shared/PostCard';
  
  
  const Overview = () => {
    return (
      <div>
        <Row gutter={16}>
          <Col sm={24} md={6} className="mb-8">
          <PostCard
              title="Shrimp and Chorizo Paella"
              subtitle="Yesterday"
              image="/static/images/unsplash/6.jpg"
             
              imageHeight={309}
            />
          </Col>
          
        </Row>
      </div>
    );
  };
  
  export default Overview;
  