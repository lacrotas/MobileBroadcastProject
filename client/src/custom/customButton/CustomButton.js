import "./CustomButton.scss";
import SelectImage from "../../assets/images/select.svg";
import { useState, useEffect } from "react";
import { fetchCityes, fetchCountries, fetchOneCity } from "../../http/cityApi";

function CustomButton({ setValue, defaultValue, type, isFullObject, choosenValue }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [selectValues, setSelectValues] = useState();

  const [myChoosenValue, setMyChoosenValue] = useState();
  const [isValueWasChanged, setIsValueWasChanged] = useState(false);

  const [valueIndex, setValueIndex] = useState(-1);
  useEffect(() => {
    if (type === "city") {
      fetchCityes().then(data => setSelectValues(data));
      if (choosenValue) {
        fetchOneCity(choosenValue).then(data => setMyChoosenValue(data.name));
      }
    } else if (type === "tehnology") {
      setSelectValues([
        { name: "Android" }, { name: "Aurora" }, { name: "Flutter" },
        { name: "IOS" }, { name: "Kotlin" }, { name: "Mobile Web" },
        { name: "ReactNative" }])
    } else if (type === "country") {
      fetchCountries().then(data => setSelectValues(data));
    }
  }, []);

  function handleSet(item, valueIndex) {
    setSelectedValue(item);
    setValueIndex(valueIndex);
    setIsValueWasChanged(true);
    if (item === defaultValue) {
      setValue(undefined);
    } else {
      setValue(item);
    }
  }
  function handleSetObj(item, valueIndex) {
    setSelectedValue(item.name);
    setValueIndex(valueIndex);
    setIsValueWasChanged(true);
    if (item === defaultValue) {
      setValue(undefined);
    } else {
      setValue(item);
    }
  }

  return (
    <div className="custom_button_container" onClick={() => setIsOpen(!isOpen)} onMouseLeave={() => setIsOpen(false)}>
      <div className="custom_button">
        <img className="custom_image" src={SelectImage} alt="image" />
        <p className="custom_text">{(!isValueWasChanged && choosenValue) ? myChoosenValue : selectedValue}</p>
      </div>
      {isOpen && <div className="custom_button-container">
        {!(valueIndex == -1) &&
          <p className="custom_text" onClick={() => handleSet(defaultValue, -1)}>{defaultValue}</p>
        }
        {selectValues.map((item, index) => (
          !(valueIndex == index) &&
          <p className="custom_text" key={index} onClick={() => isFullObject ? handleSetObj(item, index) : handleSet(item.name, index)}>{item.name}</p>
        ))}
      </div>}
    </div>
  );
}

export default CustomButton;
