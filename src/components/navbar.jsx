import Nav from 'react-bootstrap/Nav';


function BasicExample() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/single">SingleTrain</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/multi">MultiTrain</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BasicExample;