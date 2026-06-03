function SavePanel({
    hasSavedCharacter,
    onLoadSaved,
    onDeleteSaved,
    onResetForm,
}) {
return (
<div className="button-row">
<button className="btn" type="button" onClick={onLoadSaved}>
Wczytaj zapis
</button>

<button className="btn danger" type="button" onClick={onDeleteSaved}>
Usuń zapis
</button>

<button className="btn" type="button" onClick={onResetForm}>
Reset formularza
</button>

<p className="save-status">
{hasSavedCharacter
 ? "Masz zapisaną postać w state."
 : "Brak zapisanej postaci w state."}
</p>
</div>
);
}

export default SavePanel;