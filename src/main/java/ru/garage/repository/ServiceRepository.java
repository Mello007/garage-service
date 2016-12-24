package ru.garage.repository;


import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.garage.entity.Service;

@RepositoryRestResource(collectionResourceRel = "service", path = "service")
public interface ServiceRepository extends PagingAndSortingRepository<Service, Long> {

    @Transactional
    void deleteByDescription(@Param("description") String description);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM service", nativeQuery = true)
    void deleteAll();

}
