function CharacterForm({ formData, errors, onChange, onSubmit }) {
    const totalPoints =
        formData.stats.strength +
        formData.stats.agility +
        formData.stats.intelligence;

    return (
        <form className="character-form" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nick postaci</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="Np. DarkHunter"
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="race">Rasa</label>
                <select
                    id="race"
                    name="race"
                    value={formData.race}
                    onChange={onChange}
                >
                    <option value="">-- wybierz --</option>
                    <option value="Człowiek">Człowiek</option>
                    <option value="Elf">Elf</option>
                    <option value="Ork">Ork</option>
                </select>
                {errors.race && <p className="error">{errors.race}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="classType">Klasa postaci</label>
                <select
                    id="classType"
                    name="classType"
                    value={formData.classType}
                    onChange={onChange}
                >
                    <option value="">-- wybierz --</option>
                    <option value="Wojownik">Wojownik</option>
                    <option value="Mag">Mag</option>
                    <option value="Łucznik">Łucznik</option>
                    <option value="Tank">Tank</option>
                </select>
                {errors.classType && <p className="error">{errors.classType}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="level">Poziom</label>
                <input
                    id="level"
                    name="level"
                    type="number"
                    min="1"
                    max="60"
                    value={formData.level}
                    onChange={onChange}
                />
                {errors.level && <p className="error">{errors.level}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="weapon">Broń startowa</label>
                <select
                    id="weapon"
                    name="weapon"
                    value={formData.weapon}
                    onChange={onChange}
                >
                    <option value="">-- wybierz --</option>
                    <option value="Miecz">Miecz</option>
                    <option value="Łuk">Łuk</option>
                    <option value="Laska maga">Laska maga</option>
                    <option value="Topór">Topór</option>
                </select>
                {errors.weapon && <p className="error">{errors.weapon}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="description">Opis postaci</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={onChange}
                    rows="4"
                    placeholder="Krótki opis bohatera..."
                />
                {errors.description && <p className="error">{errors.description}</p>}
            </div>

            <div className="form-group checkbox-group">
                <label htmlFor="isPremium">
                    <input
                        id="isPremium"
                        name="isPremium"
                        type="checkbox"
                        checked={formData.isPremium}
                        onChange={onChange}
                    />
                    Postać premium
                </label>
            </div>

            <div className="stats-box">
                <h3>Statystyki</h3>

                <div className="form-group">
                    <label htmlFor="strength">Siła</label>
                    <input
                        id="strength"
                        name="stats.strength"
                        type="number"
                        min="0"
                        max="15"
                        value={formData.stats.strength}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="agility">Zręczność</label>
                    <input
                        id="agility"
                        name="stats.agility"
                        type="number"
                        min="0"
                        max="15"
                        value={formData.stats.agility}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="intelligence">Inteligencja</label>
                    <input
                        id="intelligence"
                        name="stats.intelligence"
                        type="number"
                        min="0"
                        max="15"
                        value={formData.stats.intelligence}
                        onChange={onChange}
                    />
                </div>

                <p className="points-info">Suma punktów: {totalPoints}/15</p>
                {errors.stats && <p className="error">{errors.stats}</p>}
            </div>

            <button className="btn primary" type="submit">
                Zapisz postać
            </button>
        </form>
    );
}

export default CharacterForm;