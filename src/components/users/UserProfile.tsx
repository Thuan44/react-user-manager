import { useState } from "react"
import type { User } from "../../types/user.type"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"

const UserProfile = ({
    user,
    onEdit,
    edit,
    setEdit,
}: {
    user: User
    onEdit: (firstName: string, lastName: string) => void
    edit: boolean
    setEdit: (edit: boolean) => void
}) => {
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-8">
            <div className="flex md:items-center gap-6 border-b pb-6">
                <img
                    src={user.image}
                    alt={user.firstName}
                    className={`hidden md:block w-16 h-16 md:w-32 md:h-32 rounded-full object-cover border-4 shadow ${
                        user.role === "admin"
                            ? "border-red-200"
                            : user.role === "moderator"
                            ? "border-blue-200"
                            : "border-gray-200"
                    }`}
                />
                <div>
                    {edit ? (
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                                className="border border-gray-300 p-2 max-w-[150px]"
                            />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="border border-gray-300 p-2 max-w-[150px]"
                            />
                            <button
                                onClick={() => onEdit(firstName, lastName)}
                                className="cursor-pointer transition-all duration-200 hover:scale-110 w-fit"
                            >
                                <FontAwesomeIcon icon={faFloppyDisk} />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <h2 className="text-3xl font-bold mb-1">
                                {user.firstName} {user.lastName}
                            </h2>
                            <button
                                onClick={() => setEdit(true)}
                                className="cursor-pointer transition-all duration-200 hover:scale-110"
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                        </div>
                    )}
                    <p className="text-gray-500">@{user.username}</p>
                    {["admin", "moderator"].includes(user.role) && (
                        <span
                            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                                user.role === "admin"
                                    ? "bg-red-100 text-red-500"
                                    : " bg-blue-100 text-blue-500"
                            }`}
                        >
                            {user.role}
                        </span>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 break-all">
                <div>
                    <h3 className="font-semibold text-lg mb-2">
                        Informations générales
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>
                            <b>Âge :</b> {user.age}
                        </li>
                        <li>
                            <b>Sexe :</b> {user.gender}
                        </li>
                        <li>
                            <b>Date de naissance :</b> {user.birthDate}
                        </li>
                        <li>
                            <b>Groupe sanguin :</b> {user.bloodGroup}
                        </li>
                        <li>
                            <b>Taille :</b> {user.height} cm
                        </li>
                        <li>
                            <b>Poids :</b> {user.weight} kg
                        </li>
                        <li>
                            <b>Couleur des yeux :</b> {user.eyeColor}
                        </li>
                        {user.hair.color && (
                            <li>
                                <b>Cheveux :</b> {user.hair.color} (
                                {user.hair.type})
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Contact</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>
                            <b>Email :</b> {user.email}
                        </li>
                        <li>
                            <b>Téléphone :</b> {user.phone}
                        </li>
                        <li>
                            <b>Adresse IP :</b> {user.ip}
                        </li>
                        <li>
                            <b>Agent utilisateur :</b> {user.userAgent}
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>
                            <b>Adresse :</b> {user.address.address}
                        </li>
                        <li>
                            <b>Ville :</b> {user.address.city}
                        </li>
                        {user.address?.state && (
                            <li>
                                <b>État :</b> {user.address.state} (
                                {user.address.stateCode})
                            </li>
                        )}
                        {user.address.postalCode && (
                            <li>
                                <b>Code postal :</b> {user.address.postalCode}
                            </li>
                        )}
                        {user.address.coordinates && (
                            <li>
                                <b>Coordonnées :</b>{" "}
                                {user.address.coordinates.lat},{" "}
                                {user.address.coordinates.lng}
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Entreprise</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>
                            <b>Nom :</b> {user.company.name}
                        </li>
                        <li>
                            <b>Département :</b> {user.company.department}
                        </li>
                        <li>
                            <b>Titre :</b> {user.company.title}
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Banque</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>
                            <b>Type :</b> {user.bank.cardType}
                        </li>
                        <li>
                            <b>Numéro :</b> {user.bank.cardNumber}
                        </li>
                        <li>
                            <b>Date d'expiration :</b> {user.bank.cardExpire}
                        </li>
                        <li>
                            <b>IBAN :</b> {user.bank.iban}
                        </li>
                        <li>
                            <b>Devise :</b> {user.bank.currency}
                        </li>
                    </ul>
                </div>
                {user.crypto && (
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Crypto</h3>
                        <ul className="text-gray-700 space-y-1">
                            <li>
                                <b>Coin :</b> {user.crypto.coin}
                            </li>
                            <li>
                                <b>Wallet :</b>{" "}
                                <span>{user.crypto.wallet}</span>
                            </li>
                            <li>
                                <b>Réseau :</b> {user.crypto.network}
                            </li>
                        </ul>
                    </div>
                )}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Autres</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>
                            <b>Université :</b> {user.university}
                        </li>
                        <li>
                            <b>Mac Address :</b> {user.macAddress}
                        </li>
                        <li>
                            <b>EIN :</b> {user.ein}
                        </li>
                        <li>
                            <b>SSN :</b> {user.ssn}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
