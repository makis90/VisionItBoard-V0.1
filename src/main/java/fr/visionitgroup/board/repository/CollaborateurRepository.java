package fr.visionitgroup.board.repository;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.visionitgroup.board.domain.Collaborateur;

/**
 * Spring Data JPA repository for the Collaborateur entity.
 */
public interface CollaborateurRepository extends JpaRepository<Collaborateur, Serializable>{
	
	// Rechercher un collaborateur par son Idmob_ress
	//	Collaborateur findById(Long id);
		
		Collaborateur findByIdmobRess(Integer idmobRess);

}
