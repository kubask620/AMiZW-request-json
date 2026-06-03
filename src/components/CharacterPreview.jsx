function CharacterPreview({
    title,
    character,
    emptyMessage = "Brak danych do wyświetlenia.",
}) {
return (
<div className="preview-box">
<h2>{title}</h2>

{!character ? (
<p>{emptyMessage}</p>
) : (
<>
<p>
<strong>Nick:</strong> {character.name || "-"}
</p>
<p>
<strong>Rasa:</strong> {character.race || "-"}
</p>
<p>
<strong>Klasa:</strong> {character.classType || "-"}
</p>
<p>
<strong>Poziom:</strong> {character.level}
</p>
<p>
<strong>Broń:</strong> {character.weapon || "-"}
</p>
<p>
<strong>Premium:</strong> {character.isPremium ? "Tak" : "Nie"}
</p>
<p>
<strong>Opis:</strong> {character.description || "-"}
</p>

<div className="stats-preview">
<h3>Statystyki</h3>
<p>Siła: {character.stats.strength}</p>
<p>Zręczność: {character.stats.agility}</p>
<p>Inteligencja: {character.stats.intelligence}</p>
</div>
</>
)}
</div>
);
}

export default CharacterPreview;