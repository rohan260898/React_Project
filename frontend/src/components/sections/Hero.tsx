import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
    Box,
    Button,
    Flex,
    Image,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";

export default function Hero({
    title,
    subtitle,
    image,
    ctaLink,
    ctaText,
    ...rest
}: any) {
    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"

            minH="70vh"
            px={8}
            mb={16}
            {...rest}
        >
            <Stack
                spacing={4}
                w={{ base: "80%", md: "40%" }}
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    color="black"
                    textAlign={["center", "center", "left", "left"]}
                >
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    color="blue"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={["center", "center", "left", "left"]}
                >
                    {subtitle}
                </Heading>
                <Link to={ctaLink}>
                    <Button
                        colorScheme="primary"
                        borderRadius="8px"
                        py="4"
                        px="4"
                        lineHeight="1"
                        bg="blue"
                        size="md"
                    >
                        {ctaText}
                    </Button>
                </Link>
                <Text
                    fontSize="xs"

                    mt={2}
                    textAlign="center"
                    color="primary.800"
                    opacity="0.6"
                >
                </Text>
            </Stack>
            <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>

                <Image height="500px" width="500px" src={image} rounded="1rem" shadow="2xl" />
            </Box>
        </Flex>
    );
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
};

Hero.defaultProps = {
    title: "React landing page with Chakra UI",
    subtitle:
        "This is the subheader section where you describe the basic benefits of your product",
    image: "https://source.unsplash.com/collection/404339/800x600",
    ctaText: "Create your account now",
    ctaLink: "/signup",
};