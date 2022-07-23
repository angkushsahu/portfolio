import { SiEthereum, SiSolidity, SiWeb3Dotjs } from "react-icons/si";
import SkillLayout from "./skill-layout";

const Blockchain = () => {
	return (
		<SkillLayout title="Blockchain">
			<div className="skill_container">
				<SiSolidity color="#373737" />
				<p>Solidity</p>
			</div>
			<div className="skill_container">
				<SiWeb3Dotjs />
				<p>Web3.js</p>
			</div>
			<div className="skill_container">
				<SiEthereum color="#313131" />
				<p>Ethers.js</p>
			</div>
		</SkillLayout>
	);
};

export default Blockchain;
