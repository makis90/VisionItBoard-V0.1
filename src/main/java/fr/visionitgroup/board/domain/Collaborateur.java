package fr.visionitgroup.board.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

/**
 * A Collaborateur.
 */
@Entity
@Table(name = "T_COLLABORATEUR")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Collaborateur implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "num_enr")
    private Integer num_enr;

    @Column(name = "idmob_ress")
    private Integer idmobRess;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "pole")
    private String pole;

    @Column(name = "business_unit")
    private String business_unit;

    @Column(name = "date_dispo")
    private String date_dispo;

    @Column(name = "nb_jours")
    private Integer nb_jours;

    @Column(name = "tjm", precision=10, scale=2)
    private BigDecimal tjm;

    @Column(name = "fonction_ress")
    private String fonction_ress;

    @Column(name = "date_entree")
    private String date_entree;

    @Column(name = "date_sortie")
    private String date_sortie;

    @Column(name = "observations")
    private String observations;

    @Column(name = "id_dossier")
    private Integer id_dossier;

    @Column(name = "tel_perso")
    private String tel_perso;

    @Column(name = "tel_client")
    private String tel_client;

    @Column(name = "mail_vision")
    private String mail_vision;

    @Column(name = "mission")
    private String mission;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNum_enr() {
        return num_enr;
    }

    public void setNum_enr(Integer num_enr) {
        this.num_enr = num_enr;
    }

    public Integer getIdmob_ress() {
		return idmobRess;
	}

	public void setIdmob_ress(Integer idmobRess) {
		this.idmobRess = idmobRess;
	}

	public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getPole() {
        return pole;
    }

    public void setPole(String pole) {
        this.pole = pole;
    }

    public String getBusiness_unit() {
        return business_unit;
    }

    public void setBusiness_unit(String business_unit) {
        this.business_unit = business_unit;
    }

    public String getDate_dispo() {
        return date_dispo;
    }

    public void setDate_dispo(String date_dispo) {
        this.date_dispo = date_dispo;
    }

    public Integer getNb_jours() {
        return nb_jours;
    }

    public void setNb_jours(Integer nb_jours) {
        this.nb_jours = nb_jours;
    }

    public BigDecimal getTjm() {
        return tjm;
    }

    public void setTjm(BigDecimal tjm) {
        this.tjm = tjm;
    }

    public String getFonction_ress() {
        return fonction_ress;
    }

    public void setFonction_ress(String fonction_ress) {
        this.fonction_ress = fonction_ress;
    }

    public String getDate_entree() {
        return date_entree;
    }

    public void setDate_entree(String date_entree) {
        this.date_entree = date_entree;
    }

    public String getDate_sortie() {
        return date_sortie;
    }

    public void setDate_sortie(String date_sortie) {
        this.date_sortie = date_sortie;
    }

    public String getObservations() {
        return observations;
    }

    public void setObservations(String observations) {
        this.observations = observations;
    }

    public Integer getId_dossier() {
        return id_dossier;
    }

    public void setId_dossier(Integer id_dossier) {
        this.id_dossier = id_dossier;
    }

    public String getTel_perso() {
        return tel_perso;
    }

    public void setTel_perso(String tel_perso) {
        this.tel_perso = tel_perso;
    }

    public String getTel_client() {
        return tel_client;
    }

    public void setTel_client(String tel_client) {
        this.tel_client = tel_client;
    }

    public String getMail_vision() {
        return mail_vision;
    }

    public void setMail_vision(String mail_vision) {
        this.mail_vision = mail_vision;
    }

    public String getMission() {
        return mission;
    }

    public void setMission(String mission) {
        this.mission = mission;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        Collaborateur collaborateur = (Collaborateur) o;

        if (id != null ? !id.equals(collaborateur.id) : collaborateur.id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return (int) (id ^ (id >>> 32));
    }

    @Override
    public String toString() {
        return "Collaborateur{" +
                "id=" + id +
                ", num_enr='" + num_enr + "'" +
                ", idmob_ress='" + idmobRess + "'" +
                ", nom='" + nom + "'" +
                ", prenom='" + prenom + "'" +
                ", pole='" + pole + "'" +
                ", business_unit='" + business_unit + "'" +
                ", date_dispo='" + date_dispo + "'" +
                ", nb_jours='" + nb_jours + "'" +
                ", tjm='" + tjm + "'" +
                ", fonction_ress='" + fonction_ress + "'" +
                ", date_entree='" + date_entree + "'" +
                ", date_sortie='" + date_sortie + "'" +
                ", observations='" + observations + "'" +
                ", id_dossier='" + id_dossier + "'" +
                ", tel_perso='" + tel_perso + "'" +
                ", tel_client='" + tel_client + "'" +
                ", mail_vision='" + mail_vision + "'" +
                ", mission='" + mission + "'" +
                '}';
    }
}
