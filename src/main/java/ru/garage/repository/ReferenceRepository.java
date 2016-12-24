package ru.garage.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.garage.entity.Provider;
import ru.garage.entity.Reference;

@RepositoryRestResource(collectionResourceRel = "reference", path = "reference")
public interface ReferenceRepository extends PagingAndSortingRepository<Reference, Long> {

    @Transactional
    void deleteByDateOfIssue(@Param("dateOfIssue") String dateOfIssue);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM reference", nativeQuery = true)
    void deleteAll();
}
