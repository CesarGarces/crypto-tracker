import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getAllCryptos, getCryptoDetails } from "../app/services/cryptos"; // Reemplaza con la ruta correcta de tu archivo de funciones

describe("API Functions", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should fetch crypto data", async () => {
    const quantity = 10;
    const mockData = { data: [{ id: 1, name: "Crypto 1" }, { id: 2, name: "Crypto 2" }] };
    mock.onGet(`${process.env.API_URL}/tickers/?limit=${quantity}`).reply(200, mockData);

    const result = await getAllCryptos(quantity);

    expect(result).toEqual(mockData.data);
  });

  it("should fetch crypto details", async () => {
    const cryptoId = 1;
    const mockData = { id: 1, name: "Crypto 1", /* otros datos */ };
    mock.onGet(`${process.env.API_URL}/ticker/?id=${cryptoId}`).reply(200, mockData);

    const result = await getCryptoDetails(cryptoId);

    expect(result).toEqual(mockData);
  });
});