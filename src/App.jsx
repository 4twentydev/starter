import { Flex, Button } from "@radix-ui/themes";

function App() {
  return (
<>
<Flex direction="column" gap="2" className="justify-center items-center h-screen"> 
<Button className="fixed top-2 mx-auto"><a href="https://github.com/4twentydev" target='new'>
    Github
</a></Button>
		</Flex>
</>  );
}

export default App;
