package ru.garage.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.garage.entity.Driver;


@RepositoryRestResource(collectionResourceRel = "driver", path = "driver")
public interface DriverRepository extends PagingAndSortingRepository<Driver, Long> {

    @Transactional
    void deleteByFio(@Param("fio") String fio);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM driver", nativeQuery = true)
    void deleteAll();
}
