import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CtaWrapper>
          <CtaTopLogo src="/images/cta-logo-one.svg" draggable="false" />
          <SignUp>Get all there</SignUp>
          <Description>
            Get premier access to Raya and the last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and the Disney Bundle will increase by $1.
          </Description>
          <CtaBottomLogo src="/images/cta-logo-two.png" draggable="false" />
        </CtaWrapper>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-flow: column;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  height: 100%;
`;

const BgImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: center center / cover url("/images/login-background.jpg")
    no-repeat;
  z-index: -1;
`;

const CtaWrapper = styled.div`
  max-width: 650px;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const CtaTopLogo = styled.img`
  margin: 0 auto 12px auto;
  max-width: 550px;
  width: 100%;
  display: inline-block;
`;

const SignUp = styled.button`
  font-weight: bold;
  text-transform: uppercase;
  color: #f9f9f9;
  background: #0063e5;
  width: 100%;
  letter-spacing: 1.5px;
  border-radius: 5px;
  padding: 1rem;
  font-size: 18px;
  cursor: pointer;
  border: 1px solid transparent;
  margin-bottom: 12px;
  transition: 0.3s ease;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CtaBottomLogo = styled.img`
  max-width: 550px;
  display: inline-block;
  margin-bottom: 20px;
  width: 100%;
`;

export default Login;
