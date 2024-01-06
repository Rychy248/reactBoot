import style from "./partSelection.module.css";

function OptionRender({ option, onClick }) {
  return (
    <div className={style["item-part"]}>
      <h2
        className={style["item-title"]}
        data-option={option}
        onClick={onClick}
      >{option.replace("-"," ")}</h2>
    </div>  
  );
};

function PartSelection({ options, setComponentSelected }) {

  function handlerClick({ currentTarget:{ dataset: { option } }, ...props}) {
    setComponentSelected(option);
  };

  return(
    <div className={style["container"]}>
      {options.map((item, index)=>(
        <OptionRender key={index} option={item} onClick={handlerClick} />
      ))}

    </div>
  );
};

export default PartSelection;