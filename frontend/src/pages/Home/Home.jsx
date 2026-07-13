import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import {
  FaCarSide,
  FaTools,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import axios from "../../services/axios";
import bmw from "../../assets/brands/bmw.svg";
import mercedes from "../../assets/brands/mercedes.svg";
import audi from "../../assets/brands/audi.svg";
import porsche from "../../assets/brands/porsche.svg";
import ferrari from "../../assets/brands/ferrari.svg";
import lamborghini from "../../assets/brands/lamborghini.svg";
import tesla from "../../assets/brands/tesla.svg";
import toyota from "../../assets/brands/toyota.svg";
export default function Home() {
  const brands = [
    {
      name: "BMW",
      logo: bmw,
    },
    {
      name: "Mercedes-Benz",
      logo: mercedes,
    },
    {
      name: "Audi",
      logo: audi,
    },
    {
      name: "Porsche",
      logo: porsche,
    },
    {
      name: "Ferrari",
      logo: ferrari,
    },
    {
      name: "Lamborghini",
      logo: lamborghini,
    },
    {
      name: "Tesla",
      logo: tesla,
    },
    {
      name: "Toyota",
      logo: toyota,
    },
  ];
  const services = [
    {
      icon: <FaCarSide />,
      title: "Buy Premium Cars",
      text: "Browse a wide collection of luxury and certified vehicles at competitive prices.",
    },
    {
      icon: <FaTools />,
      title: "Maintenance",
      text: "Professional maintenance and repair services by experienced technicians.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Sell Your Car",
      text: "Sell your vehicle quickly and get the best market value with our experts.",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Financing",
      text: "Flexible financing options with low interest rates and fast approval.",
    },
  ];
  const testimonials = [
    {
      name: "John Smith",
      car: "BMW M4 Competition",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Excellent service from start to finish. The team made buying my dream car easy and stress-free.",
    },
    {
      name: "Emily Johnson",
      car: "Mercedes AMG GT",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Professional staff, transparent pricing and an amazing collection of luxury vehicles.",
    },
    {
      name: "Michael Brown",
      car: "Audi RS7",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      review:
        "One of the best dealerships I've ever visited. Highly recommended for anyone looking for premium cars.",
    },
  ];
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const featuredCars = cars.filter((car) => car.isFeatured).slice(0, 3);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await axios.get("/cars");
        setCars(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  const navigate = useNavigate();
  return (
    <HomeContainer>
      <Hero>
        <Overlay />
        <HeroContent>
          <SmallTitle>PREMIUM CAR DEALERSHIP</SmallTitle>
          <Title>
            Find Your
            <span> Dream Car </span>
            Today
          </Title>
          <Description>
            Discover luxury, performance and reliability. Choose from our wide
            collection of premium vehicles.
          </Description>
          <SearchBox>
            <SearchItem>
              <FaSearch />
              <input placeholder="Search your car..." />
            </SearchItem>
            <SearchButton onClick={() => navigate("/cars")}>
              Explore Cars
            </SearchButton>
          </SearchBox>
        </HeroContent>
      </Hero>
      <FeaturedSection>
        <SectionHeader>
          <SmallTitle>FEATURED CARS</SmallTitle>
          <SectionTitle>Our Premium Collection</SectionTitle>
          <SectionDescription>
            Explore our hand-picked selection of luxury and high-performance
            vehicles.
          </SectionDescription>
        </SectionHeader>

        <CarsGrid>
          {featuredCars.map((car) => (
            <CarCard key={car._id}>
              <CarImage src={car.thumbnail} alt={car.model} />

              <CarInfo>
                <CarName>
                  {car.brand} {car.model}
                </CarName>

                <CarDetails>
                  <span>{car.year}</span>
                  <span>{car.engine}</span>
                </CarDetails>

                <Bottom>
                  <Price>
                    {car.price} {car.currency}
                  </Price>

                  <ViewButton>View</ViewButton>
                </Bottom>
              </CarInfo>
            </CarCard>
          ))}
        </CarsGrid>
      </FeaturedSection>
      <WhySection>
        <SectionHeader>
          <SmallTitle>WHY CHOOSE US</SmallTitle>

          <SectionTitle>Experience The AutoLux Difference</SectionTitle>

          <SectionDescription>
            We provide premium vehicles, trusted service and a seamless car
            buying experience.
          </SectionDescription>
        </SectionHeader>
        <WhyGrid>
          <WhyCard>
            <WhyIcon>🚗</WhyIcon>
            <WhyTitle>Premium Cars</WhyTitle>
            <WhyText>
              Carefully selected luxury and performance vehicles.
            </WhyText>
          </WhyCard>
          <WhyCard>
            <WhyIcon>🛡️</WhyIcon>
            <WhyTitle>Trusted Quality</WhyTitle>
            <WhyText>Every vehicle is inspected to ensure reliability.</WhyText>
          </WhyCard>
          <WhyCard>
            <WhyIcon>💰</WhyIcon>
            <WhyTitle>Best Prices</WhyTitle>
            <WhyText>Competitive prices for premium vehicles.</WhyText>
          </WhyCard>
          <WhyCard>
            <WhyIcon>⚡</WhyIcon>
            <WhyTitle>Fast Service</WhyTitle>
            <WhyText>Quick support and smooth purchasing process.</WhyText>
          </WhyCard>
        </WhyGrid>
      </WhySection>
      <BrandsSection>
        <SectionHeader>
          <SmallTitle>TOP BRANDS</SmallTitle>
          <SectionTitle>Explore Popular Brands</SectionTitle>
          <SectionDescription>
            Choose from the world's most trusted and luxury car manufacturers.
          </SectionDescription>
        </SectionHeader>
        <BrandsGrid>
          {brands.map((brand) => (
            <BrandCard key={brand.name}>
              <BrandLogo>
                <img src={brand.logo} alt={brand.name} />
              </BrandLogo>

              <BrandName>{brand.name}</BrandName>
            </BrandCard>
          ))}
        </BrandsGrid>
      </BrandsSection>
      <LatestSection>
        <SectionHeader>
          <SmallTitle>LATEST ARRIVALS</SmallTitle>
          <SectionTitle>Recently Added Vehicles</SectionTitle>
          <SectionDescription>
            Explore the newest luxury and performance vehicles added to our
            collection.
          </SectionDescription>
        </SectionHeader>

        <LatestGrid>
          {cars.slice(0, 6).map((car) => (
            <LatestCard key={car._id}>
              <LatestImage src={car.thumbnail} alt={car.model} />

              <Badge>NEW</Badge>

              <LatestContent>
                <LatestTitle>
                  {car.brand} {car.model}
                </LatestTitle>

                <InfoRow>
                  <span>📅 {car.year}</span>
                  <span>⚙ {car.transmission}</span>
                </InfoRow>

                <InfoRow>
                  <span>⛽ {car.fuelType}</span>
                  <span>📍 {car.city}</span>
                </InfoRow>

                <InfoRow>
                  <span>🚗 {car.mileage.toLocaleString()} km</span>
                  <span>{car.condition}</span>
                </InfoRow>

                <LatestBottom>
                  <LatestPrice>
                    {car.price.toLocaleString()} {car.currency}
                  </LatestPrice>

                  <DetailsButton>View Details</DetailsButton>
                </LatestBottom>
              </LatestContent>
            </LatestCard>
          ))}
        </LatestGrid>
      </LatestSection>
      <ServicesSection>
        <SectionHeader>
          <SmallTitle>OUR SERVICES</SmallTitle>

          <SectionTitle>Everything You Need</SectionTitle>

          <SectionDescription>
            We provide complete automotive solutions to make buying and owning
            your dream car easy and enjoyable.
          </SectionDescription>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>

              <ServiceTitle>{service.title}</ServiceTitle>

              <ServiceText>{service.text}</ServiceText>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>
      <TestimonialsSection>
        <SectionHeader>
          <SmallTitle>TESTIMONIALS</SmallTitle>
          <SectionTitle>What Our Customers Say</SectionTitle>
          <SectionDescription>
            Trusted by hundreds of happy customers who found their dream cars
            with us.
          </SectionDescription>
        </SectionHeader>
        <TestimonialsGrid>
          {testimonials.map((item, index) => (
            <TestimonialCard key={index}>
              <Stars>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Stars>
              <Review>"{item.review}"</Review>
              <Customer>
                <CustomerImage src={item.image} alt={item.name} />
                <div>
                  <CustomerName>{item.name}</CustomerName>

                  <CustomerCar>{item.car}</CustomerCar>
                </div>
              </Customer>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>
      <CTASection>
        <CTAOverlay />
        <CTAContent>
          <CTASmallTitle>READY TO DRIVE?</CTASmallTitle>
          <CTATitle>
            Find Your Dream Car <br />
            Today
          </CTATitle>
          <CTAText>
            Discover our exclusive collection of luxury, sports and family
            vehicles. Your next journey starts here.
          </CTAText>
          <CTAButton onClick={() => navigate("/cars")}>Explore Cars</CTAButton>
        </CTAContent>
      </CTASection>
    </HomeContainer>
  );
}
const HomeContainer = styled.div`
  background: #111827;
  padding-bottom: 60px; 
`;
const Hero = styled.section`
  height: calc(100vh - 85px);
  background-image: url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 700px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(17, 24, 39, 0.95),
    rgba(17, 24, 39, 0.55)
  );
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 1400px;
  margin: auto;
  color: white;
`;
const SmallTitle = styled.p`
  color: #ef4444;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 3px;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  font-size: 70px;
  line-height: 1.1;
  max-width: 700px;
  margin: 0;
  font-weight: 800;
  span {
    color: #ef4444;
  }
  @media (max-width: 768px) {
    font-size: 45px;
  }
  @media (max-width: 480px) {
    font-size: 35px;
  }
`;
const Description = styled.p`
  margin-top: 25px;
  color: #d1d5db;
  font-size: 18px;
  max-width: 550px;
  line-height: 1.7;
`;
const SearchBox = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 15px;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;
const SearchItem = styled.div`
  width: 350px;
  height: 55px;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #6b7280;
  input {
    border: none;
    outline: none;
    margin-left: 12px;
    font-size: 16px;
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const SearchButton = styled.button`
  height: 55px;
  padding: 0 35px;
  border: none;
  border-radius: 10px;
  background: #ef4444;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #dc2626;
    transform: translateY(-2px);
  }
`;
const FeaturedSection = styled.section`
  background: #111827;
  padding: 90px 0;
`;
const SectionTitle = styled.h2`
  font-size: 45px;
  color: white;
  margin: 10px 0;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
const SectionDescription = styled.p`
  color: #9ca3af;
  font-size: 18px;
  line-height: 1.6;
`;
const CarsGrid = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const SectionHeader = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;
const CarCard = styled.div`
  background: #1f2937;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.3s;
  &:hover {
    transform: translateY(-8px);
  }
`;
const CarInfo = styled.div`
  padding: 25px;
`;
const CarName = styled.h3`
  color: white;
  font-size: 24px;
  margin: 0 0 15px;
`;
const CarDetails = styled.div`
  display: flex;
  gap: 15px;
  span {
    color: #9ca3af;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;
const Price = styled.h3`
  color: #ef4444;
  margin: 0;
`;
const ViewButton = styled.button`
  background: #ef4444;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;
const CarImage = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  display: block;
`;
export const WhySection = styled.section`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 90px 0;
`;

export const WhyGrid = styled.div`
  display: grid;
  padding-top: 30px;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const WhyCard = styled.div`
  background: #111827;
  padding: 35px 25px;
  border-radius: 20px;
  text-align: center;
  transition: 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.05);
  &:hover {
    transform: translateY(-8px);
    background: #1f2937;
  }
`;
export const WhyIcon = styled.div`
  font-size: 45px;
  margin-bottom: 20px;
`;
export const WhyTitle = styled.h3`
  color: white;
  font-size: 22px;
  margin-bottom: 15px;
`;
export const WhyText = styled.p`
  color: #9ca3af;
  line-height: 1.6;
  font-size: 15px;
`;
export const BrandsSection = styled.section`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 70px 0;
`;
export const BrandsGrid = styled.div`
  display: grid;
  padding-top: 30px;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
export const BrandCard = styled.div`
  height: 190px;
  background: linear-gradient(145deg, #1f2937, #0f172a);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    border-color: #ef4444;
    box-shadow: 0 20px 40px rgba(239, 68, 68, 0.15);
  }
`;
export const BrandLogo = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  img {
    width: 65px;
    height: 65px;
    object-fit: contain;
    filter: brightness(0) invert(1);
    transition: 0.4s;
  }

  ${BrandCard}:hover img {
    transform: scale(1.15);
  }
`;
export const BrandName = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;
export const LatestSection = styled.section`
  width: 90%;
  max-width: 1400px;
  padding: 70px 0;
  margin: 0 auto;
`;
export const LatestCard = styled.div`
  background: #111827;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transition: 0.35s;
  border: 1px solid rgba(255, 255, 255, 0.08);
  &:hover {
    transform: translateY(-10px);
    border-color: #ef4444;
  }
`;
export const LatestImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: 0.4s;
  ${LatestCard}:hover & {
    transform: scale(1.08);
  }
`;
export const Badge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: #ef4444;
  color: white;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
`;
export const LatestContent = styled.div`
  padding: 25px;
`;
export const LatestTitle = styled.h3`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`;
export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  color: #cbd5e1;
  font-size: 15px;
`;
export const LatestBottom = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LatestPrice = styled.h2`
  color: #ef4444;
  font-size: 24px;
`;
export const DetailsButton = styled.button`
  border: none;
  background: #ef4444;
  color: white;
  padding: 12px 22px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #dc2626;
  }
`;
export const LatestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 30px;
  margin-top: 50px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ServicesSection = styled.section`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 70px 0;
`;
export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 50px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
export const ServiceCard = styled.div`
  background: linear-gradient(145deg, #111827, #1f2937);
  border-radius: 22px;
  padding: 40px 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.35s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    border-color: #ef4444;
    box-shadow: 0 20px 40px rgba(239, 68, 68, 0.18);
  }
`;
export const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: auto auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(239, 68, 68, 0.12);
  color: #ef4444;
  font-size: 34px;
  transition: 0.35s;
  ${ServiceCard}:hover & {
    background: #ef4444;
    color: white;
    transform: rotate(10deg) scale(1.08);
  }
`;
export const ServiceTitle = styled.h3`
  color: white;
  font-size: 22px;
  margin-bottom: 18px;
`;
export const ServiceText = styled.p`
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 15px;
`;
export const TestimonialsSection = styled.section`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 70px 0;
`;
export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
export const TestimonialCard = styled.div`
  background: linear-gradient(145deg, #111827, #1f2937);
  border-radius: 22px;
  padding: 35px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.35s;
  &:hover {
    transform: translateY(-10px);
    border-color: #ef4444;
    box-shadow: 0 20px 40px rgba(239, 68, 68, 0.15);
  }
`;
export const Stars = styled.div`
  display: flex;
  gap: 6px;
  color: #facc15;
  font-size: 18px;
  margin-bottom: 20px;
`;
export const Review = styled.p`
  color: #d1d5db;
  line-height: 1.8;
  font-size: 15px;
  margin-bottom: 30px;
`;
export const Customer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const CustomerImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ef4444;
`;
export const CustomerName = styled.h4`
  color: white;
  margin-bottom: 5px;
`;
export const CustomerCar = styled.p`
  color: #9ca3af;
  font-size: 14px;
`;
export const CTASection = styled.section`
  width: 90%;
  max-width: 1400px;
  height: 420px;
  margin: 0 auto;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  background-image: url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80");
  background-size: cover;
  background-position: center;
`;
export const CTAOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(17, 24, 39, 0.85));
`;
export const CTAContent = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
`;
export const CTASmallTitle = styled.span`
  color: #ef4444;
  font-size: 15px;
  letter-spacing: 3px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const CTATitle = styled.h2`
  color: white;
  font-size: 58px;
  line-height: 1.2;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;
export const CTAText = styled.p`
  color: #d1d5db;
  font-size: 18px;
  max-width: 700px;
  line-height: 1.8;
  margin-bottom: 35px;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const CTAButton = styled.button`
  border: none;
  background: #ef4444;
  color: white;
  padding: 18px 45px;
  font-size: 18px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.35s;
  font-weight: 600;
  &:hover {
    background: #dc2626;
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(239, 68, 68, 0.35);
  }
`;
