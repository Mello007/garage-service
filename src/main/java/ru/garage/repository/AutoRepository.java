package ru.garage.repository;


import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.garage.entity.Auto;

@RepositoryRestResource(collectionResourceRel = "auto", path = "auto")
public interface AutoRepository extends PagingAndSortingRepository<Auto, Long> {

    @Transactional
    void deleteByMark(@Param("mark") String mark);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM auto", nativeQuery = true)
    void deleteAll();
}
