import React from "react";
import { Typography, Row, Col, Card } from "antd";
import {
  TrophyOutlined,
  SafetyOutlined,
  HeartOutlined,
  RocketOutlined,
  StarOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const reasons = [
  {
    icon: <TrophyOutlined style={{ fontSize: 40, color: "#12b3b6" }} />,
    title: "15+ Years Excellence",
    description: "Award-winning dental practice with proven track record of successful treatments.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    icon: <SafetyOutlined style={{ fontSize: 40, color: "#12b3b6" }} />,
    title: "Latest Technology",
    description: "State-of-the-art equipment and modern techniques for painless procedures.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    icon: <HeartOutlined style={{ fontSize: 40, color: "#12b3b6" }} />,
    title: "Patient-Centered Care",
    description: "Personalized treatment plans designed specifically for your unique needs.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    icon: <RocketOutlined style={{ fontSize: 40, color: "#12b3b6" }} />,
    title: "Quick & Efficient",
    description: "Minimal waiting times with same-day appointments available.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    icon: <StarOutlined style={{ fontSize: 40, color: "#12b3b6" }} />,
    title: "5-Star Reviews",
    description: "Consistently rated as the top dental clinic by our patients.",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    icon: <TeamOutlined style={{ fontSize: 40, color: "#12b3b6" }} />,
    title: "Expert Team",
    description: "Highly qualified dentists with international certifications and training.",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
];

export default function WhyChooseUs() {
  return (
    <div style={{ padding: "100px 20px", background: "#fafbfc", position: "relative" }}>
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(18, 179, 182, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)`,
        }}
      />
      
      <div style={{ maxWidth: 1200, margin: "auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <Title
            level={2}
            style={{
              color: "#23356f",
              fontSize: 42,
              fontWeight: 800,
              marginBottom: 16,
              background: "linear-gradient(135deg, #23356f, #12b3b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose Dr Srikars' Advanced Dental Care?
          </Title>
          <Paragraph style={{ fontSize: 18, color: "#617195", maxWidth: 600, margin: "auto" }}>
            We're not just another dental clinic. Here's what makes us the preferred choice
            for thousands of families.
          </Paragraph>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {reasons.map((reason, idx) => (
            <Col xs={24} sm={12} md={8} key={idx}>
              <Card
                hoverable
                style={{
                  borderRadius: 20,
                  border: "none",
                  overflow: "hidden",
                  height: "100%",
                  background: "#fff",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                bodyStyle={{ padding: 30, textAlign: "center", height: "100%" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.1)";
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    background: reason.gradient,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                  }}
                >
                  {React.cloneElement(reason.icon, { style: { fontSize: 40, color: "#fff" } })}
                </div>
                <Title level={4} style={{ marginBottom: 16, color: "#23356f" }}>
                  {reason.title}
                </Title>
                <Paragraph style={{ color: "#617195", fontSize: 15, lineHeight: 1.6 }}>
                  {reason.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
