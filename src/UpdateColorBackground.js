

export default function UpdateColorBackground(props) {
  const color = {
    "01d": "#F8B121",
    "01n": "#F8B121",
    "02d": "#bac6ce",
    "02n": "#bac6ce",
    "03d": "#bac6ce",
    "03n": "#bac6ce",
    "04d": "#5b6063",
    "04n": "#5b6063",
    "09d": "#0d6efd",
    "09n": "#0d6efd",
    "10d": "#0d6efd",
    "10n": "#0d6efd",
    "11d": "#0d6efd",
    "11n": "#0d6efd",
    "13d": "#bac6ce",
    "13n": "#bac6ce",
    "50d": "#5b6063",
    "50n": "#5b6063",
  };

  function changeColor() {
    if (color[props.codeIcon] === "#F8B121") {
      document.body.style.background =
        "linear-gradient(135deg, #fdfcfb 20%, #F8B121 100%) fixed";
    }
    if (color[props.codeIcon] === "#bac6ce") {
      document.body.style.background =
        "linear-gradient(135deg, #fdfcfb 20%, #bac6ce 100%) fixed";
    }
    if (color[props.codeIcon] === "#5b6063") {
      document.body.style.background =
        "linear-gradient(135deg, #fdfcfb 20%, #5b6063 100%) fixed";
    }
    if (color[props.codeIcon] === "#0d6efd") {
      document.body.style.background =
        "linear-gradient(135deg, #fdfcfb 20%, #0d6efd 100%) fixed";
    }
  }
  changeColor()

  return null
}
