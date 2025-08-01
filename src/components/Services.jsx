import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  SmileOutlined,
  TeamOutlined,
  MedicineBoxOutlined,
  RadarChartOutlined,
  CrownOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const services = [
  {
    icon: <SmileOutlined style={{ fontSize: 50 }} />,
    title: "General Dentistry",
    description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments for lasting dental wellness.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    features: ["Regular Cleanings", "Cavity Fillings", "Oral Exams"],
  },
  {
    icon: <CrownOutlined style={{ fontSize: 50 }} />,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with professional whitening, veneers, and complete smile makeovers by certified experts.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    features: ["Teeth Whitening", "Porcelain Veneers", "Smile Design"],
  },
  {
    icon: <MedicineBoxOutlined style={{ fontSize: 50 }} />,
    title: "Digital X-Rays",
    description: "State-of-the-art digital imaging technology providing instant, detailed diagnostics with minimal radiation exposure.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    features: ["3D Imaging", "Instant Results", "Safe Technology"],
  },
  {
    icon: <RadarChartOutlined style={{ fontSize: 50 }} />,
    title: "Sedation Dentistry",
    description: "Comfortable, anxiety-free dental experiences with various sedation options for patients of all ages.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    features: ["Nitrous Oxide", "Oral Sedation", "IV Sedation"],
  },
  {
    icon: <TeamOutlined style={{ fontSize: 50 }} />,
    title: "Pediatric Care",
    description: "Specialized gentle care for children with child-friendly techniques and a comfortable, welcoming environment.",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    features: ["Child-Friendly", "Preventive Care", "Education"],
  },
  {
    icon: <SafetyOutlined style={{ fontSize: 50 }} />,
    title: "Emergency Care",
    description: "24/7 emergency dental services for urgent situations, providing immediate relief and professional treatment.",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    features: ["24/7 Availability", "Immediate Relief", "Expert Care"],
  },
];

export default function Services() {
  return (
    <div 
      style={{ 
        padding: "100px 20px", 
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(18, 179, 182, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(245, 87, 108, 0.05) 0%, transparent 50%)`,
        }}
      />

      <div style={{ maxWidth: 1200, margin: "auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <Title
            level={2}
            style={{
              color: "#22356f",
              fontSize: 48,
              fontWeight: 900,
              marginBottom: 20,
              background: "linear-gradient(135deg, #22356f, #12b3b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Premium Services
          </Title>
          <Paragraph 
            style={{ 
              fontSize: 20, 
              color: "#617195", 
              maxWidth: 700, 
              margin: "auto",
              lineHeight: 1.7
            }}
          >
            Comprehensive dental care using the latest technology and techniques, 
            tailored to meet your unique oral health needs.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]} justify="center">
          {services.map((service, idx) => (
            <Col xs={24} sm={12} md={8} key={idx}>
              <Card
                hoverable
                style={{
                  borderRadius: 24,
                  border: "none",
                  overflow: "hidden",
                  height: "100%",
                  background: "#fff",
                  boxShadow: "0 15px 45px rgba(0,0,0,0.08)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  minHeight: 450, // Fixed minimum height
                }}
                bodyStyle={{ padding: 0, height: "100%", display: "flex", flexDirection: "column" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 80px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 15px 45px rgba(0,0,0,0.08)";
                }}
              >
                {/* Gradient Header */}
                <div
                  style={{
                    background: service.gradient,
                    padding: "30px 20px 25px", // Reduced padding
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      width: 80, // Smaller icon container
                      height: 80,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px", // Reduced margin
                      backdropFilter: "blur(10px)",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {React.cloneElement(service.icon, { style: { fontSize: 40, color: "#fff" } })} {/* Smaller icon */}
                  </div>
                  <Title level={4} style={{ color: "#fff", marginBottom: 0, fontSize: 18 }}> {/* Smaller title */}
                    {service.title}
                  </Title>
                </div>

                {/* Content - Flex container */}
                <div style={{ 
                  padding: "20px", // Reduced padding
                  flex: 1,
                  display: "flex", 
                  flexDirection: "column",
                  justifyContent: "space-between" // Distribute space evenly
                }}>
                  <Paragraph 
                    style={{ 
                      color: "#617195", 
                      fontSize: 14, // Smaller font
                      lineHeight: 1.5,
                      marginBottom: 15, // Reduced margin
                    }}
                  >
                    {service.description}
                  </Paragraph>
                  
                  {/* Features List */}
                  <div>
                    <Title level={6} style={{ color: "#22356f", marginBottom: 10, fontSize: 13 }}> {/* Smaller heading */}
                      Key Features:
                    </Title>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}> {/* Reduced gap */}
                      {service.features.map((feature, i) => (
                        <div 
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6, // Reduced gap
                            fontSize: 12, // Smaller font
                            color: "#12b3b6",
                            fontWeight: 500
                          }}
                        >
                          <div
                            style={{
                              width: 5, // Smaller dot
                              height: 5,
                              borderRadius: "50%",
                              background: "linear-gradient(135deg, #12b3b6, #0ea5e9)",
                              flexShrink: 0, // Prevent dot from shrinking
                            }}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
