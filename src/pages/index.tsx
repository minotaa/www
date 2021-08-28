import Button from "../components/Button";
import Container from "../components/Container";

export default function Home() {
    return (
        <Container>
            <br />
            <div className="md:container md:mx-auto">
                <h1 className="title">💽 minota</h1>
                <h2 className="subtitle">This is my website, I'll keep it short.</h2>
                <br />
                <hr />
                <br />
                <h1 className="title">Social Links</h1>
                <h2 className="subtitle">These are my social media links.</h2>
                <br />
                <p>
                    <Button title="Twitter" display="🐦 twitter" link="https://twitter.com/minotadev"></Button>
                    &nbsp;
                    <Button title="GitHub" display="💻 github" link="https://github.com/xMinota"></Button>
                    &nbsp;
                    <Button title="Minecraft" display="⛏️ minecraft" link="https://namemc.com/minota"></Button>
                    &nbsp;
                    <Button title="Steam" display="🎮 steam" link="https://steamcommunity.com/id/minota/"></Button>
                    &nbsp;
                    <Button title="Donate" display="💸 donate" link="https://ko-fi.com/minota"></Button>
                </p>
                <br />
                <hr />
                <br />
                <img title="My Pronouns" alt="My Pronouns" src="https://img.shields.io/endpoint?url=https://pronoundb.org/shields/61181354be124c42b207bffc&style=flat"></img>
            </div>
        </Container>
    )
}