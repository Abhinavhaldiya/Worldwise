import ReactCountryFlag from "react-country-flag";

function Flag({countryCode,country}) {
    return (
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{
            width: "2em",
            height:"1.0em",
          }}
          title={country}
        />
    )
}
export default Flag
