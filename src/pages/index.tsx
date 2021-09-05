import Button from "../components/Button";
import Container from "../components/Container";

// <h1 className="title">💽 minota</h1>

export default function Home() {
    return (
        <Container>
            <br />
            <div className="md:container md:mx-auto">
                <h1 className="title">💽 minota</h1>
                <br />
                <hr />
                <br />
                <p className="m-auto">
                    <Button title="Telegram" display="☎️ telegram" link="https://t.me/xminota"></Button>
                    &nbsp;
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
            </div>
        </Container>
    )
}