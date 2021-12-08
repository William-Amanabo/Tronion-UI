import Link from "next/link";
import Layout from "@/components/Layout";
import { FaEnvelope } from "react-icons/fa";
import { FormCard } from "@/components/FormCard";
import { Line, Text, LargeIcon, FlexWrapper } from "@/components/common";

export default function Airdrop() {
  return (
    <Layout title="Airdrop">
      <Heading>Airdrop</Heading>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/airdrop/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const airdrop = await res.json();

  return {
    props: {
      airdrop,
      token,
    },
  };
}
