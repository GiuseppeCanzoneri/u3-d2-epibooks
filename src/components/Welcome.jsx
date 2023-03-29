import { Container } from "react-bootstrap";

const Welcome = () => (
  <div className="bg-secondary py-5 mt-2">
    <Container>
      <h1 className="display-4">La tua libreria online di fiducia</h1>
      <hr />
      <p className="lead">
        "Benvenuto nella nostra libreria online, dove troverai una vasta gamma di libri di ogni genere. Che tu stia
        cercando romanzi, libri di cucina, libri di storia o altro ancora, abbiamo ciò di cui hai bisogno per soddisfare
        la tua curiosità e la tua passione per la lettura.
      </p>
    </Container>
  </div>
);

export default Welcome;
