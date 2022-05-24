import styled from 'styled-components';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #000;
`;

const Rectangle = styled.section`
  width: 500px;
  height: 300px;
  background-color: red;
`;

const Link = styled.a`
  color: #fff;
`;

const Header = () => {
  return (
    <>
      <Rectangle>
        <Box>
          <Link href='http://www.disney.com'>Loren Ipsum.</Link>
        </Box>
      </Rectangle>
    </>
  );
};

export default Header;
