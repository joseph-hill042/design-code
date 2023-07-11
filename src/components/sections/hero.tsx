import * as React from "react";
// @ts-ignore
import logo from "../../images/logos/logo.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
  color: white;
`;
const Description = styled.p`
  font-size: 17px;
  line-height: 130%;
`;
const HeroSection: React.FC = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br /> and Code React apps
          </Title>
          <Description>
            Don't skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;
