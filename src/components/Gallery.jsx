import React, { useRef, useState } from "react";
import { Carousel, Typography, Button, Modal, Image } from "antd";
import { LeftOutlined, RightOutlined, EyeOutlined, PlayCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const galleryItems = [
  {
    type: "image",
    src: "public/gallery_1.png",
    title: "Modern Treatment Rooms",
    description: "State-of-the-art equipment in comfortable settings"
  },
  {
    type: "image", 
    src: "public/gallery_2.png",
    title: "Professional Care",
    description: "Expert dental professionals at work"
  },
  {
    type: "image",
    src: "https://source.unsplash.com/1200x600/?smile,teeth,happy",
    title: "Beautiful Results",
    description: "Transform your smile with our expertise"
  },
  {
    type: "image",
    src: "https://source.unsplash.com/1200x600/?dental,tools,technology",
    title: "Advanced Technology",
    description: "Latest dental equipment and techniques"
  },
  {
    type: "image",
    src: "https://source.unsplash.com/1200x600/?dental,office,reception",
    title: "Welcoming Environment",
    description: "Comfortable and modern clinic atmosphere"
  },
];

export default function Gallery() {
  const carouselRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const nextSlide = () => carouselRef.current.next();
  const prevSlide = () => carouselRef.current.prev();

  const openModal = (item) => {
    setCurrentImage(item);
    setModalVisible(true);
  };

  return (
    <div 
      style={{ 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: 200,
          height: 200,
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "10%",
          width: 150,
          height: 150,
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite reverse",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <Title
            level={2}
            style={{
              color: "#fff",
              fontSize: 48,
              fontWeight: 900,
              marginBottom: 20,
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Our Modern Clinic
          </Title>
          <Paragraph 
            style={{ 
              fontSize: 20, 
              color: "rgba(255, 255, 255, 0.9)", 
              maxWidth: 600, 
              margin: "auto",
              lineHeight: 1.7
            }}
          >
            Take a virtual tour of our state-of-the-art facility designed for your comfort and care.
          </Paragraph>
        </div>
        
        {/* Navigation Buttons */}
        <Button
          type="primary"
          shape="circle"
          icon={<LeftOutlined />}
          size="large"
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: -70,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 56,
            height: 56,
            background: "rgba(255, 255, 255, 0.2)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            fontSize: 18,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          className="gallery-nav-btn gallery-nav-left"
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            e.target.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "translateY(-50%) scale(1)";
          }}
        />
        
        <Button
          type="primary"
          shape="circle"
          icon={<RightOutlined />}
          size="large"
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: -70,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 56,
            height: 56,
            background: "rgba(255, 255, 255, 0.2)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            fontSize: 18,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          className="gallery-nav-btn gallery-nav-right"
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            e.target.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "translateY(-50%) scale(1)";
          }}
        />

        <Carousel
          ref={carouselRef}
          autoplay
          autoplaySpeed={5000}
          dotPosition="bottom"
          style={{ borderRadius: 24, overflow: "hidden" }}
        >
          {galleryItems.map((item, idx) => (
            <div key={idx} style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 24,
                  cursor: "pointer",
                }}
                onClick={() => openModal(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: 500,
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
                
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    padding: "60px 40px 40px",
                    color: "#fff",
                  }}
                >
                  <Title level={3} style={{ color: "#fff", marginBottom: 8 }}>
                    {item.title}
                  </Title>
                  <Paragraph style={{ color: "rgba(255, 255, 255, 0.9)", marginBottom: 0, fontSize: 16 }}>
                    {item.description}
                  </Paragraph>
                </div>

                {/* View Icon */}
                <div
                  style={{
                    position: "absolute",
                    top: 30,
                    right: 30,
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(10px)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <EyeOutlined style={{ color: "#fff", fontSize: 20 }} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Modal for Full View */}
      <Modal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width="90%"
        style={{ maxWidth: 1000 }}
        centered
      >
        {currentImage && (
          <div>
            <Image
              src={currentImage.src}
              alt={currentImage.title}
              style={{ width: "100%" }}
              preview={false}
            />
            <div style={{ padding: "20px 0", textAlign: "center" }}>
              <Title level={3}>{currentImage.title}</Title>
              <Paragraph style={{ fontSize: 16 }}>{currentImage.description}</Paragraph>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
