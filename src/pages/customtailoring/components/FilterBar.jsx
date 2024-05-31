// Chakra UI imports
import {
  Container,
  Box,
  Text,
  Divider,
  Checkbox,
  Stack
} from "@chakra-ui/react";

// Icon imports
import { VscColorMode } from "react-icons/vsc";

const FilterBar = ({ isFilterMenuOpen, setIsFilterMenuOpen }) => {
  return (
    <Box width={"100%"} maxWidth={"100%"} padding={"1rem"}>
      <Box>
        <Text color={"secondary"} marginBottom={"1.2rem"} fontSize={"1.3rem"}>Highlights</Text>
        <Divider orientation="horizontal" borderColor={"secondary"} />
        <Box color={"secondary"} marginTop={"1.2rem"}>
          <Stack direction={"column"}>
            <Checkbox spacing={"1rem"}>New</Checkbox>
            <Checkbox spacing={"1rem"}>Best-seller</Checkbox>
            <Checkbox spacing={"1rem"}>Easy/non-iron</Checkbox>
            <Checkbox spacing={"1rem"}>Premium</Checkbox>
            <Checkbox spacing={"1rem"}>Stretch</Checkbox>
            <Checkbox spacing={"1rem"}>Oxford</Checkbox>
            <Checkbox spacing={"1rem"}>Flannel</Checkbox>
          </Stack>
        </Box>
      </Box>

      <Box marginTop={"3rem"}>
        <Text color={"secondary"} marginBottom={"1.2rem"} fontSize={"1.3rem"}>Occasion</Text>
        <Divider orientation="horizontal" borderColor={"secondary"} />
        <Box color={"secondary"} marginTop={"1.2rem"}>
          <Stack direction={"column"}>
            <Checkbox spacing={"1rem"}>Business</Checkbox>
            <Checkbox spacing={"1rem"}>Casual</Checkbox>
            <Checkbox spacing={"1rem"}>Celebration</Checkbox>
            <Checkbox spacing={"1rem"}>Smart casual</Checkbox>
          </Stack>
        </Box>
      </Box>

      <Box marginTop={"3rem"}>
        <Text color={"secondary"} marginBottom={"1.2rem"} fontSize={"1.3rem"}>Color</Text>
        <Divider orientation="horizontal" borderColor={"secondary"} />
        <Box color={"secondary"} marginTop={"1.2rem"}>
          <Stack direction={"column"}>
            <Checkbox spacing={"1rem"}>White</Checkbox>
            <Checkbox spacing={"1rem"}>Black</Checkbox>
            <Checkbox spacing={"1rem"}>Gray</Checkbox>
            <Checkbox spacing={"1rem"}>Green</Checkbox>
            <Checkbox spacing={"1rem"}>Yellow</Checkbox>
            <Checkbox spacing={"1rem"}>Green</Checkbox>
          </Stack>
        </Box>
      </Box>

      <Box marginTop={"3rem"}>
        <Text color={"secondary"} marginBottom={"1.2rem"} fontSize={"1.3rem"}>Season</Text>
        <Divider orientation="horizontal" borderColor={"secondary"} />
        <Box color={"secondary"} marginTop={"1.2rem"}>
          <Stack direction={"column"}>
            <Checkbox spacing={"1rem"}>Year round</Checkbox>
            <Checkbox spacing={"1rem"}>Summer</Checkbox>
            <Checkbox spacing={"1rem"}>Winter</Checkbox>
          </Stack>
        </Box>
      </Box>

      <Box marginTop={"3rem"}>
        <Text color={"secondary"} marginBottom={"1.2rem"} fontSize={"1.3rem"}>Features</Text>
        <Divider orientation="horizontal" borderColor={"secondary"} />
        <Box color={"secondary"} marginTop={"1.2rem"}>
          <Stack direction={"column"}>
            <Checkbox spacing={"1rem"}>
              <Text>Quick dry</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Breathable</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Long lasring white</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Coolmax</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Anti-pilling</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Soft touch</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Easy iron</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Wrinkle free</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Oeko tex</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Print</Text>
            </Checkbox>
          </Stack>
        </Box>
      </Box>

      <Box marginTop={"3rem"}>
        <Text color={"secondary"} marginBottom={"1.2rem"} fontSize={"1.3rem"}>Material</Text>
        <Divider orientation="horizontal" borderColor={"secondary"} />
        <Box color={"secondary"} marginTop={"1.2rem"}>
          <Stack direction={"column"}>
            <Checkbox spacing={"1rem"}>
              <Text>Cotton</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Linen</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Cotton blend</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Linen cotton</Text>
            </Checkbox>
          </Stack>
        </Box>
      </Box>

      <Box marginTop={"3rem"}>
        <Text color={"secondary"} marginBottom={"1.2rem"} fontSize={"1.3rem"}>Weave</Text>
        <Divider orientation="horizontal" borderColor={"secondary"} />
        <Box color={"secondary"} marginTop={"1.2rem"}>
          <Stack direction={"column"}>
            <Checkbox spacing={"1rem"}>
              <Text>Cotton</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Linen</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Cotton blend</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Linen cotton</Text>
            </Checkbox>
          </Stack>
        </Box>
      </Box>

      <Box marginTop={"3rem"}>
        <Text color={"secondary"} marginBottom={"1.2rem"} fontSize={"1.3rem"}>Price</Text>
        <Divider orientation="horizontal" borderColor={"secondary"} />
        <Box color={"secondary"} marginTop={"1.2rem"}>
          <Stack direction={"column"}>
            <Checkbox spacing={"1rem"}>
              <Text>Under $60</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>60$ - $105</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>$105 - $150</Text>
            </Checkbox>
            <Checkbox spacing={"1rem"}>
              <Text>Above $150</Text>
            </Checkbox>
          </Stack>
        </Box>
      </Box>

    </Box>
  );
};

export default FilterBar;